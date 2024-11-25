import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export const useGallery = (): {photos: IGatsbyImageData[]} => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { extension: { eq: "webp" } }) {
				edges {
					node {
						childImageSharp {
							gatsbyImageData(
								placeholder: BLURRED
								formats: [AUTO, WEBP]
							)
						}
					}
				}
			}
		}
	`);
	
	const photos = data.allFile.edges.map((edge:any)=>edge.node.childImageSharp.gatsbyImageData)
	return {photos}; 
};
