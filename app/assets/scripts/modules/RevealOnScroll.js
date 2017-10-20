import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $(".feature-item");
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		this.itemsToReveal.each(function() {
			new waypoints({
				element: x,
				handler: x,
			});
		});
	}
}

export default RevealOnScroll;