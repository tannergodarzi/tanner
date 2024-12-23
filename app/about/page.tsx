import styles from "./about.module.css";

export default async function AboutPage() {
	return (
		<article className={styles.about}>
			<section className={styles.column_list}>
				<h1>Howdy Friend, I&rsquo;m Tanner</h1>
				<section
					className={styles.column}
					style={{
						width: "min(50vw, 300px)",
					}}
				>
					<p className={styles.paragraph}>
						Not actually a cowboy but I do love a good felt hat and adventure. I&rsquo;m a Front-End
						Engineer building Notion&rsquo;s Marketing Site and telling the story of tools for work. In a
						past life I worked at Dropbox, Square (I really like cubes) after a tour with an agency and
						freelancing.
					</p>
					<p className={styles.paragraph}>
						I think the web should be a sandbox of infinite exploration to unlock our human potential for
						creativity and communication. Utilitarian tools and acid bath type experiences are the
						polarizing ends of the web I find most exciting to build.
					</p>
				</section>
				<aside
					className={styles.column}
					style={{
						width: "min(50vw, 300px)",
					}}
				>
					<picture className={styles.image}>
						<img
							src="https://www.tannergodarzi.com/tanner-godarzi.jpeg"
							alt="An image of Tanner Godarzi"
							width="1000"
							height="1341"
						/>
					</picture>
				</aside>
			</section>
			<hr className={styles.divider} />
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
			<p className={styles.paragraph}>
				I love getting coffee with people and talking design, art, new web technologies, to mundane theories
				about urban planning.
			</p>
			<p className={styles.paragraph}>
				Sound weird? Let&rsquo;s talk 🤠{" "}
				<a href="mailto:tanner.godarzi%2Bhowdy@gmail.com">tanner.godarzi@gmail.com</a>
			</p>
		</article>
	);
}
