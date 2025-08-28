import styles from "./about.module.css";

export default async function AboutPage() {
	return (
		<article className={styles.about}>
			<h1>Hello Friend, I&rsquo;m Tanner</h1>

			<p className={styles.paragraph}>
				Not actually a cowboy, but I do love a good felt hat and adventure. Currently I'm A Front-End Engineer currently at Vercel telling the story of better Development on the Web. In a past life I worked at Notion,
				Dropbox, Square (I really like companies with cube shaped logos) after a tour with an agency and
				freelancing.
			</p>
			<p className={styles.paragraph}>
				I think the web should be a sandbox of infinite exploration to unlock our human potential for creativity
				and communication. Utilitarian tools and acid bath type experiences are the polarizing ends of the web I
				find most exciting to build.
			</p>
			<p className={styles.paragraph}>
				I find joy in bringing people together and creating a community, usually over a dinner party invoking
				the fine touches and wackiness of our patron saint of food Eric Wareheim. You should throw a dinner
				party for friends and strangers.
			</p>
			<p className={styles.paragraph}>
				While I&rsquo;m at ease in a city like San Francisco, I&rsquo;m captivated by the unfolding beauty of
				deserts of the American Southwest. Wherever I go I take a camera with me capturing landscapes or just
				the odd times we&rsquo;re in (friends included).
			</p>
			<p className={styles.paragraph}>
				Writing is a new habit of mine to make conversations, thoughts and explorations more concrete and easily
				shareable. I write about the forgotten touches to interior design, adventure and sometimes technical
				explorations.
			</p>
			<p className={styles.paragraph}>
				I&rsquo;m eternally optimistic about the future. Perpetual doom and gloom isn&rsquo;t something I mesh
				with. However, I do love discourse and debate.
			</p>
		</article>
	);
}
