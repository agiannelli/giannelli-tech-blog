import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const AboutPage = () => {
  return (
    <>
      <BlogLayout>
        <p>
          I’m just a girl, standing in front of the internet, talking about the
          stuff I like.
        </p>
        <p>
          <a href="https://twitter.com/GiannelliTech" target="new">
            twitter
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/giannellitech-104495164982225/"
            target="new"
          >
            facebook
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/giannelli.tech/" target="new">
            instagram
          </a>
        </p>
        <p>
          <a href="mailto:giannelli.tech@gmail.com" target="new">
            email
          </a>
        </p>
      </BlogLayout>
    </>
  )
}

export default AboutPage
