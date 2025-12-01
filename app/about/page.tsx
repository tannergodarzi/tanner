import styles from "./about.module.css";

export default async function AboutPage() {
	return (
		<article className={styles.about}>
			<h1>Hello Friend, I&rsquo;m Tanner</h1>

			<p className={styles.paragraph}>
				Not actually a cowboy, but I do love a good felt hat and adventure. I&rsquo;m a Front-End Engineer at
				Vercel, telling the story of better development on the web. Previously, I worked at Notion, Dropbox, and
				Square (I really like companies with cube-shaped logos), along with time spent at an agency and
				freelancing.
			</p>
			<p className={styles.paragraph}>
				I believe the web should be a sandbox of infinite exploration—a place to unlock our human potential for
				creativity and communication. Utilitarian tools and experimental, boundary-pushing experiences are the
				polarizing ends of the web I find most exciting to build.
			</p>
			<p className={styles.paragraph}>
				I find joy in bringing people together and creating community, usually over a dinner party that invokes
				the fine touches and wackiness of our patron saint of food, Eric Wareheim. You should throw a dinner
				party for friends and strangers.
			</p>
			<p className={styles.paragraph}>
				While I&rsquo;m at ease in a city like San Francisco, I&rsquo;m captivated by the unfolding beauty of
				the deserts in the American Southwest. Wherever I go, I take a camera with me to capture landscapes and
				the odd times we&rsquo;re living in (friends included).
			</p>
			<p className={styles.paragraph}>
				Writing is a new habit of mine—a way to make conversations, thoughts, and explorations more concrete and
				easily shareable. I write about the forgotten touches of interior design, adventure, and sometimes
				technical explorations.
			</p>
			<p className={styles.paragraph}>
				I&rsquo;m eternally optimistic about the future. Perpetual doom and gloom isn&rsquo;t something I mesh
				with, though I do love discourse and debate.
			</p>
			<div className={styles.grid}>
				{/** 1 */}
				<span
					style={
						{
							"--grid-column": 4,
							"--grid-row": 1,
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				{/** 2 */}
				<span
					style={
						{
							"--grid-column": 3,
							"--grid-row": 2,
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 4,
							"--grid-row": 2,
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 5,
							"--grid-row": 2,
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				{/** 3 */}
				<span
					style={
						{
							"--grid-column": 2,
							"--grid-row": 3,
							transform: "translateX(50%)",
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 4,
							"--grid-row": 3,
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 6,
							"--grid-row": 3,
							transform: "translateX(-50%)",
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				{/** 4 */}
				<span
					style={
						{
							"--grid-column": 2,
							"--grid-row": 4,
						} as React.CSSProperties
					}
				>
					{"👇"}
				</span>
				<span
					style={
						{
							"--grid-column": 3,
							"--grid-row": 4,
							transform: "translateX(50%)",
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 5,
							"--grid-row": 4,
							transform: "translateX(-50%)",
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 6,
							"--grid-row": 4,
						} as React.CSSProperties
					}
				>
					{"👇"}
				</span>
				{/** 5 */}
				<span
					style={
						{
							"--grid-column": 3,
							"--grid-row": 5,
							transform: "translateX(25%)",
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 5,
							"--grid-row": 5,
							transform: "translateX(-25%)",
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				{/** 6 */}
				<span
					style={
						{
							"--grid-column": 3,
							"--grid-row": 6,
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				<span
					style={
						{
							"--grid-column": 5,
							"--grid-row": 6,
						} as React.CSSProperties
					}
				>
					{"🤠"}
				</span>
				{/** 6 */}
				<span
					style={
						{
							"--grid-column": 3,
							"--grid-row": 7,
						} as React.CSSProperties
					}
				>
					{"👢"}
				</span>
				<span
					style={
						{
							"--grid-column": 5,
							"--grid-row": 7,
						} as React.CSSProperties
					}
				>
					{"👢"}
				</span>
			</div>
		</article>
	);
}
