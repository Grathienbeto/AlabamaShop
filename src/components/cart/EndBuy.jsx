import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const EndBuy = () => {
    return (
        <Button as={Link} to="/checkout"  variant="outline-dark"> 
        FINALIZAR COMPRA
    </Button>
  )
}
