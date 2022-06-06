export default function ImageDetailsPage({ imageId, handleClick }) {
	return (
		<div>
			<img
				alt="art"
				src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
			/>
			<button onClick={handleClick}>return to search results</button>
		</div>
	);
}
