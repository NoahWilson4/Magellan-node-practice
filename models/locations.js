var locations = {
	names: ['Seville', 'Canary Islands', 'Cape Verde', 'Strait of Magellan', 'Guam', 'Philippines'],
	mapURLs: [],
	getPageData: function(locationIndex) {
		return {
			name: this.names[locationIndex % this.names.length],
			mapURL: this.mapURLs[locationIndex % this.mapURLs.length],
			previousVal: locationIndex === 0 ? -1 : locationIndex - 1,
			nextVal: locationIndex === this.names.length ? -1 : locationIndex + 1
		}
	}
};

locations.mapURLs.push('https://maps.googleapis.com/maps/api/staticmap?center=Seville,Spain&zoom=1&size=800x400&maptype=satellite&markers=color:blue%7CSeville,Spain')
locations.mapURLs.push('https://maps.googleapis.com/maps/api/staticmap?center=Seville,Spain&zoom=1&size=800x400&maptype=satellite&markers=color:blue%7CCanary+Islands')
locations.mapURLs.push('https://maps.googleapis.com/maps/api/staticmap?center=Seville,Spain&zoom=1&size=800x400&maptype=satellite&markers=color:blue%7CCape+Verde')
locations.mapURLs.push('https://maps.googleapis.com/maps/api/staticmap?center=Seville,Spain&zoom=1&size=800x400&maptype=satellite&markers=color:blue%7CStrait+of+Magellan')
locations.mapURLs.push('https://maps.googleapis.com/maps/api/staticmap?center=Seville,Spain&zoom=1&size=800x400&maptype=satellite&markers=color:blue%7CGuam')
locations.mapURLs.push('https://maps.googleapis.com/maps/api/staticmap?center=Seville,Spain&zoom=1&size=800x400&maptype=satellite&markers=color:blue%7CPhilippines')

module.exports = locations;