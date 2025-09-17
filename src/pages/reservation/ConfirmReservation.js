import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmReservation = () => {
  return (
    <main className='container confirm-reservation'>
        <article>
            <FontAwesomeIcon icon={faCircleCheck} size="3x" />
            <h2>Your table has been reserved!</h2>
            <p>Thank you for booking with us.</p>
            <p>You'll soon be receiving a confirmation email with all the reservation details.</p>
        </article>
    </main>
  );
};

export default ConfirmReservation;
