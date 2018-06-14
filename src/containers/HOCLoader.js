import React from 'react';

const withLoader = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      if (!this.props.dataFetched) return <div>Loading data...</div>
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }
    
  return HOC;
};

export default withLoader;