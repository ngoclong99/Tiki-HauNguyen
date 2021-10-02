import { Box, Chip } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { checkIncludes } from '../../../../constants/common'

FilterViewer.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

const FILTER_VIEWER = [
  {
    id: 1,
    getLabel: () => 'Free Ship',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters }
      newFilters.isFreeShip === true ? (newFilters.isFreeShip = false) : (newFilters.isFreeShip = true)
      return newFilters
    }
  },
  {
    id: 2,
    getLabel: () => 'Khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion === true,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters }
      delete newFilters.isPromotion
      return newFilters
    },
    onToggle: () => {}
  },
  {
    id: 3,
    getLabel: (filters) => `Từ: ${filters.salePrice_gte} - ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      checkIncludes(filters, 'salePrice_gte') && checkIncludes(filters, 'salePrice_lte'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters }
      delete newFilters.salePrice_gte
      delete newFilters.salePrice_lte
      return newFilters
    },
    onToggle: () => {}
  },
  {
    id: 4,
    getLabel: (filters) => {
      const category = JSON.parse(localStorage.getItem('category'))
      const item = category.find((item) => item.id === Number.parseInt(filters['category.id']))
      return item?.name
    },
    isActive: () => true,
    isVisible: (filters) => checkIncludes(filters, 'category.id'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters }
      delete newFilters['category.id']
      return newFilters
    },
    onToggle: () => {}
  }
]

function FilterViewer({ filters = {}, onChange = null }) {
  const visibleFilters = useMemo(() => {
    return FILTER_VIEWER.filter((x) => x.isVisible(filters))
  }, [filters])

  return (
    <Box component="ul" display="flex">
      {visibleFilters.map((x) => (
        <li key={x.id} style={{ listStyle: 'none' }}>
          <Chip
            style={{ margin: '0px 5px' }}
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            size="small"
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (onChange) {
                      const newFilter = x.onToggle(filters)
                      onChange(newFilter)
                    }
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (onChange) {
                      const newFilter = x.onRemove(filters)
                      onChange(newFilter)
                    }
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  )
}

export default FilterViewer
