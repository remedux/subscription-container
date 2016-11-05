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
      case 'subscription':
        return meteor && collection && startSubscription({
          subscribe: () => meteor.subscribe(key),
          get: () => collection.find(query || noArg, queryOptions || noArg).fetch(),
          key,
        });

      case 'reactiveSource':
        return get && registerReactiveSource({ key, get });

      default:
        return undefined;
    }
  }

  componentWillUnmount() {
    const {
      type,
      subscriptionKey,
      stopSubscription,
    } = this.props;

    return type === 'subscription'
      ? stopSubscription(subscriptionKey)
      : undefined;
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
  type: PropTypes.oneOf(['reactiveSource', 'subscription']).isRequired,

  // Optional
  get: PropTypes.func,
  query: PropTypes.object,
  meteor: PropTypes.object,
  collection: PropTypes.object,
  queryOptions: PropTypes.object,

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
