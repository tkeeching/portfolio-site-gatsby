import React from "react"
import "./Contact.sass"

const Contact: React.FC = () => (
  <div className="section-contact">
    <a className="anchor" id="contact"></a>
    <h1
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-delay="100"
      data-sal-easing="easeOutCirc"
    >
      Get in touch
    </h1>
    <nav>
      <a
        href="https://github.com/tkeeching"
        target="_blank"
        data-sal="slide-right"
        data-sal-duration="900"
        data-sal-delay="300"
        data-sal-easing="easeOutCirc"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="github-logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kee-tee/"
        target="_blank"
        data-sal="slide-right"
        data-sal-duration="1100"
        data-sal-delay="500"
        data-sal-easing="easeOutCirc"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiH0w-gIJMAxwZ3706Xf_GUN-wh3TymU8AMA&usqp=CAU"
          alt="linkedin-logo"
        />
      </a>
      <a
        href="https://twitter.com/keelearnstocode"
        target="_blank"
        data-sal="slide-right"
        data-sal-duration="1300"
        data-sal-delay="700"
        data-sal-easing="easeOutCirc"
      >
        <img
          src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png"
          alt="twitter-logo"
        />
      </a>
    </nav>
  </div>
)

export default Contact
