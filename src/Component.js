import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  registerReactiveSource,
  startSubscription,
  stopSubscription,
} from 'meteor-redux-middlewares';

class Subscriber extends Component {
  componentDidMount() {
    const {
      get,
      type,
      query,
      meteor,
      collection,
      queryOptions,
      subscriptionKey,
      startSubscription,
      registerReactiveSource,
    } = this.props;

    const key = subscriptionKey;
    const noArg = {};

    switch (type) {
      case 'reactiveSource':
        return get && registerReactiveSource({ key, get });

      case 'subscription':
      default:
        return meteor && collection && startSubscription({
          subscribe: () => meteor.subscribe(key),
          get: () => collection.find(query || noArg, queryOptions || noArg).fetch(),
          key,
        });
    }
  }

  componentWillUnmount() {
    const {
      type,
      subscriptionKey,
      stopSubscription,
    } = this.props;

    return (
      !type || type === 'subscription'
    ) && stopSubscription(subscriptionKey);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Subscriber.propTypes = {
  subscriptionKey: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['reactiveSource', 'subscription']),

  // Optional
  get: PropTypes.func,
  query: PropTypes.object,
  collection: PropTypes.object,
  queryOptions: PropTypes.object,
  meteor: PropTypes.object.isRequired,

  // Passed by connect
  startSubscription: PropTypes.func.isRequired,
  stopSubscription: PropTypes.func.isRequired,
  registerReactiveSource: PropTypes.func.isRequired,

  children: PropTypes.object,
};

const actions = {
  startSubscription,
  stopSubscription,
  registerReactiveSource,
};

export default connect(() => ({}), actions)(Subscriber);
