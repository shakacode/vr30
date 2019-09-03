import { graphql } from "gatsby"
import WelcomePage from "../components/WelcomePage/WelcomePage";

export default WelcomePage;

export const pageQuery = graphql`
  query {
    hero: mdx(frontmatter: { slug: { eq: "landing-page-hero" } }) {
      frontmatter {
        heading
        subHeading
      }
    }
    story: mdx(frontmatter: { slug: { eq: "landing-page-story" } }) {
      body
    }
    banner:  mdx(frontmatter: { slug: { eq: "landing-page-list-rental-banner" } }) {
      frontmatter {
        heading
      }
    }
  }
`
/*
Note use <MDXRenderer>{body}</MDXRenderer> for story
for reference: https://github.com/shakacode/oahu30/blob/master/src/components/Intro.js
 */