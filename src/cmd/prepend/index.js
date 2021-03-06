import React from 'react';
import type { ElementNode } from '../../util/findElements';

export default (root:Object, nodes:Array<ElementNode>, child:Object):Object => {
	nodes.forEach((node:ElementNode) => {
		node.element.props.children = [child].concat(React.Children.toArray(node.element.props.children));
	});

	return root;
};
