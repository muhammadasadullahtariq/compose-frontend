import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './styles.css'

const AuthModel = ({ open, children, handleModel, details }) => {
  return (
    <Modal
      open={open}
      onClose={handleModel}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Box
        className='auth-model'
        sx={{
          backgroundColor: '#fff',
          maxWidth: '430px'
        }}>
        <div className="auth-heading">
          <h3>ComposeTrip</h3>
        </div>
        <div className='auth-box'>
            <div className="auth-title">
                <h6>{details.title}</h6>
                <p>{details.text}</p>
            </div>
            {children}
        </div>
      </Box>
    </Modal>
  );
};

export default AuthModel;
