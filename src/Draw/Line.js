import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tooltip, IconButton } from './styled'

import Icon from '@mdi/react'
import { mdiMinus } from '@mdi/js'

class Line extends Component {
  render () {
    const { addInteraction, type, freehand, tooltipTitle } = this.props

    return (
      <Tooltip title={tooltipTitle}>
        <IconButton
          size='small'
          onClick={() => addInteraction({ type: 'LineString' })}>
          <Icon path={mdiMinus} size={1.35} rotate={30} color={type === 'LineString' && !freehand ? '#1976D2' : '#656565'} />
        </IconButton>
      </Tooltip>
    )
  }
}

Line.propTypes = {
  /** the openlayers draw type */
  type: PropTypes.string,

  /** a function that adds the draw interaction to the openlayers map on click of the button */
  addInteraction: PropTypes.func,

  /** A boolean to check if the button is freehand */
  freehand: PropTypes.bool,

  /** a title for the tooltip */
  tooltipTitle: PropTypes.string
}

export default Line