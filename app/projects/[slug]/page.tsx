// export async function generateMetadata({ params }): Promise<Metadata> {

//   return {
//     title: project.title,
//     description: `${project.title} is a web development project by Brandon Carlisle`,
//     openGraph: {
//       title: `${project.title} | Brandon Carlisle`,
//       description:
//         'Frontend web developer interested in modern tools, and making cool stuff on the web',
//       images: [
//         {
//           url: `https://carlisle.dev/api/og?subTitle=${project.title}`,
//           width: 1920,
//           height: 1080,
//         },
//       ],
//     },
//   };
// }

export default async function Project() {
  return <>Project</>;
}
