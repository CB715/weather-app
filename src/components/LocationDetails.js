import React from "react";
import PropTypes from "prop-types";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;

  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1>{`${city}, ${country}`}</h1>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;
