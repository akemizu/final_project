import { useState } from "react";
import FormField from '../../components/ui/formField/FormField';

const ReservationForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData,
}) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const defaultTime = availableTimes[0];
  const minimumPartySize = 1;
  const maximumPartySize = 10;
  const occasions = ["Birthday", "Anniversary", "Other"];
  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a valid time";
  const invalidOccasionErrorMessage = "Please choose a valid occasion";
  const invalidPartySizeErrorMessage =
    "Please enter a number between 1 and 10";

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [partySize, setPartySize] = useState(minimumPartySize);
  const [occasion, setOccasion] = useState(occasions[2]);

  const isDateValid = () => date !== "";
  const isTimeValid = () => time !== "";
  const isPartySizeValid = () => partySize !== "";
  const isOccasionValid = () => occasion !== "";

  const areAllFieldsValid = () =>
    isDateValid() &&
    isTimeValid() &&
    isPartySizeValid() &&
    isOccasionValid();

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, partySize, occasion });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField
        label="Date"
        htmlFor="reservation-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type="date"
          id="reservation-date"
          name="reservation-date"
          min={minimumDate}
          value={date}
          required={true}
          onChange={handleDateChange}
        />
      </FormField>
      <FormField
        label="Time"
        htmlFor="reservation-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <div className="select-wrapper">
          <select
            id="reservation-time"
            name="reservation-time"
            value={time}
            required={true}
            onChange={handleTimeChange}
          >
            {availableTimes.map((times) => (
              <option data-testid="reservation-time-option" key={times}>
                {times}
              </option>
            ))}
          </select>
        </div>
      </FormField>
      <FormField
        label="Party Size"
        htmlFor="reservation-number-guests"
        hasError={!isPartySizeValid()}
        errorMessage={invalidPartySizeErrorMessage}
      >
        <input
          type="number"
          id="reservation-number-guests"
          name="reservation-number-guests"
          value={partySize}
          min={minimumPartySize}
          max={maximumPartySize}
          required={true}
          onChange={(e) => setPartySize(e.target.value)}
        />
      </FormField>
      <FormField
        label="Occasion"
        htmlFor="reservation-occasion"
        hasError={!isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <div className="select-wrapper">
          <select
            id="reservation-occasion"
            name="reservation-occasion"
            value={occasion}
            required={true}
            onChange={(e) => setOccasion(e.target.value)}
          >
            {occasions.map((occasion) => (
              <option data-testid="reservation-occasion-option" key={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
      </FormField>
      <button
        className="button-primary"
        type="submit"
        disabled={!areAllFieldsValid()}
      >
        Reserve now!
      </button>
    </form>
  );
};

export default ReservationForm;
