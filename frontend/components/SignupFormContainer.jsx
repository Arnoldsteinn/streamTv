import { connect } from 'react-redux';
import { SessionForm } from './SessionForm';
import { createNewUser } from '../actions/session_actions';
import { toggleLoginModal } from '../actions/ui_modal_actions';
import { resetErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup',
  loggedIn: state.session.id !== null ? true : false
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formUser) => dispatch(createNewUser(formUser)),
  resetErrors: () => dispatch(resetErrors())
});

export const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);