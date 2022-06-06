import './SearchForm.css';

import { useState } from 'react';
import ImageDetailsPage from './ImageDetailsPage';

export function SearchForm({ onSearchSubmit, results }) {
	const [query, setQuery] = useState('');
	const [imageChosen, setImageChosen] = useState(false);
	const [imageId, setImageId] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		onSearchSubmit(query);
	}

	function handleClick(e) {
		if (e.currentTarget.tagName === 'BUTTON') {
			setImageChosen(false);
		} else {
			setImageId(e.currentTarget.getAttribute('data-image-id'));
			setImageChosen(true);
		}
	}

	function handleKeyDown(e) {
		if (e.keyCode === 13) {
			handleClick();
		}
	}

	return (
		<div>
			{!imageChosen && (
				<div>
					<form
						className="Form"
						role="search"
						onSubmit={(e) => {
							handleFormSubmit(e);
						}}
					>
						<label className="label" htmlFor="search-field">
							Search for some art
						</label>
						<input
							className="input"
							id="search-field"
							inputMode="search"
							name="query"
							type="text"
							value={query}
							onChange={handleInputChange}
						/>
						<button className="button" type="submit">
							Search
						</button>
					</form>

					<h1>Search Results</h1>
					{results &&
						results.map((result) => {
							return (
								<div
									data-image-id={`${result.image_id}`}
									role={'button'}
									tabIndex={0}
									onClick={handleClick}
									onKeyDown={handleKeyDown}
								>
									<p>Artist: {result.artist_title}</p>
									<p>Title: {result.title}</p>
								</div>
							);
						})}
				</div>
			)}
			);
			{imageChosen && (
				<ImageDetailsPage handleClick={handleClick} imageId={imageId} />
			)}
		</div>
	);
}
