type lang = "en_US" | "ar_SA"
export type Liferay = {
	ThemeDisplay: {
		getSiteGroupId(): number;
		isSignedIn(): boolean;
		getUserId(): number;
		getLanguageId(): lang
	},
	authToken?: string;
}