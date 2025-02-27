import { Button, CastomLoader, Text } from './ChangeProfileButton.styled';
import Loader from 'components/Loader/Loader';

const ChangeProfileButton = ({ onClick, isLoading, disabled }) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      id="changeProfileBtn"
    >
      {isLoading ? (
        <CastomLoader>
          <Loader />
        </CastomLoader>
      ) : (
        <Text>Save changes</Text>
      )}
    </Button>
  );
};

export default ChangeProfileButton;
