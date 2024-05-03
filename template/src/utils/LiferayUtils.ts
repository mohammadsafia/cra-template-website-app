export default class LiferayUtils {
	static init = () => {
		if(!window.Liferay) {
			window.Liferay = {
				ThemeDisplay: {
					getSiteGroupId: () => 0,
					isSignedIn: () => {
						return false;
					},
					getUserId: () => 178315,
					getLanguageId: () => "en_US",
				}
			}
		}
	}
}