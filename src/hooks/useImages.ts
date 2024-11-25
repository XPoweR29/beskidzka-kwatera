// import { graphql, useStaticQuery } from 'gatsby';
// import { IGatsbyImageData } from 'gatsby-plugin-image';

// type ImagesMap = {
// 	[key: string]: IGatsbyImageData; 
// };

// export const useImages = (): ImagesMap => {
// 	const data = useStaticQuery(graphql`
// 		query {
// 			fort1: file(relativePath: { eq: "fort1.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			fort2: file(relativePath: { eq: "fort2.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			statue1: file(relativePath: { eq: "statue1.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			statue2: file(relativePath: { eq: "statue2.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			boulevard1: file(relativePath: { eq: "boulevard1.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			boulevard2: file(relativePath: { eq: "boulevard2.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			gory1: file(relativePath: { eq: "gory1.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			gory2: file(relativePath: { eq: "gory2.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			brewery1: file(relativePath: { eq: "brewery1.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			brewery2: file(relativePath: { eq: "brewery2.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			inn1: file(relativePath: { eq: "inn1.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			inn2: file(relativePath: { eq: "inn2.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},

// 			beskid_zywiecki: file(relativePath: { eq: "beskid_zywiecki.avif" }) {
// 				childImageSharp {
// 					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
// 				}
// 			},
// 		}
// 	`);

// 	return {
// 		fort1: data.fort1.childImageSharp.gatsbyImageData,
// 		fort2: data.fort2.childImageSharp.gatsbyImageData,
// 		statue1: data.statue1.childImageSharp.gatsbyImageData,
// 		statue2: data.statue2.childImageSharp.gatsbyImageData,
// 		boulevard1: data.boulevard1.childImageSharp.gatsbyImageData,
// 		boulevard2: data.boulevard2.childImageSharp.gatsbyImageData,
// 		gory1: data.gory1.childImageSharp.gatsbyImageData,
// 		gory2: data.gory2.childImageSharp.gatsbyImageData,
// 		brewery1: data.brewery1.childImageSharp.gatsbyImageData,
// 		brewery2: data.brewery2.childImageSharp.gatsbyImageData,
// 		inn1: data.inn1.childImageSharp.gatsbyImageData,
// 		inn2: data.inn2.childImageSharp.gatsbyImageData,
// 		beskid_zywiecki: data.beskid_zywiecki.childImageSharp.gatsbyImageData,
// 	};
// };
