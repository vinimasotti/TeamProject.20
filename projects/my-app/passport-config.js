const localStrategy = require ('passport-local').Strategy
const bcrypt = require ('bcrypt')

function initialize(passport){
  const authenticateUser = (email, password, done) => {
const user = getUserByEmail(email)
if (user == null){
  return done (null, false, {message: 'email'})
}
  }

  passport.use(new localStratevgy({ usernameField:'email'}), authenticateUser)
  passport.serializeUser((user, done) => { })
  passport.serializeUser((id, done) => { })
}