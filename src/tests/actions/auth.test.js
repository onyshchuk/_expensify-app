import { login, logout } from './../../actions/auth';

test('Should setup login action', () => {
   const action = login('some uid');
   expect(action).toEqual({
      type: 'LOGIN',
      uid: 'some uid'
   });
});

test('Should setup logout action', () => {
   const action = logout();
   expect(action).toEqual({
      type: 'LOGOUT'
   });
});