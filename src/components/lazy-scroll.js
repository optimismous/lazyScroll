import React from 'react';

export class LazyScroll extends React.Component {
	render() {
		const { items, itemHeight, renderItem, visibleHeight, scrollTop, additionalItems } = this.props;
		const topVisibleIndex = Math.floor(scrollTop / itemHeight);
		const startIdx = Math.max(topVisibleIndex - additionalItems, 0);
		const endIdx = Math.min(topVisibleIndex + Math.ceil(visibleHeight / itemHeight) + additionalItems, items.length);

		const itemsToRender = items.slice(startIdx, endIdx);
		const height = items.length * itemHeight;
		const top = startIdx * itemHeight;
		
		return (
			<div style={{height: height, position: 'relative' }}>
				<div style={{position: 'absolute', left: 0, right: 0, top}}>
					{itemsToRender.map(renderItem)}
				</div>
			</div>
		);
	}
}