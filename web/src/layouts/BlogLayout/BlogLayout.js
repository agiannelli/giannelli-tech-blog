import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import banner from '../../img/giannelli-tech-banner-transparent-png.png'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <Link to={routes.home()}>
          <img
            src={banner}
            alt="giannelli.tech: the not-so-tech blog built on a tech stack"
            className="banner"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <a href="https://mailchi.mp/1bf60f294a9c/sign-up" target="new">
                Join the family
              </a>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
            {isAuthenticated && (
              <li>
                <Link to={routes.posts()}>Admin</Link>
              </li>
            )}
            <li>
              <button onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          made with 💚 using{' '}
          <a href="https://redwoodjs.com/" target="new">
            redwoodjs
          </a>{' '}
          🚀
        </p>
        <p>© 2021 giannelli.tech</p>
      </footer>
    </>
  )
}

export default BlogLayout
