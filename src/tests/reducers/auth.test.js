import authReducer from './../../reducers/auth';

test('should setup default state', () => {
   const state = authReducer(undefined, '@@INIT');
   expect(state).toEqual({});
});

test('should login ', () => {
   const action = {
      type: 'LOGIN',
      uid: 'some uid'
   }
   const state = authReducer(undefined, action);
   expect(state).toEqual({ uid: 'some uid' });
});

test('should logout ', () => {
   const prevState = { uid: 'some uid' };
   const action = { type: 'LOGOUT' };
   const state = authReducer(prevState, action);
   expect(state).toEqual({ });
});