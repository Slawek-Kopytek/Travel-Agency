import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';

import OrderSummary from '../../features/OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Grid>
    <Row>
      {pricing.map(options => (
        <Col md={4} key={options.id}>
          <OrderOption {...options} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary
          tripCost = {tripCost}
          options = {options}
          currentValue = {options[options.id]}
          setOrderOption = {setOrderOption}
        />
      </Col>
    </Row>
  </Grid>
);


OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
