import React from 'react';

export class LazyScroll extends React.Component {
	render() {
		const { items, itemHeight, renderItem, visibleHeight, scrollTop } = this.props;

		const startIdx = Math.floor(scrollTop / itemHeight);
		const endIdx = Math.min(startIdx + Math.ceil(visibleHeight / itemHeight), items.length);

		const itemsToRender = items.slice(startIdx, endIdx);
		const height = items.length * itemHeight;
		const top = startIdx * itemHeight;
		return (
			<div style={{height: height, position: 'relative' }}>
				<div style={{position: 'absolute', top}}>
					{itemsToRender.map(renderItem)}
				</div>
			</div>
		);
	}
}