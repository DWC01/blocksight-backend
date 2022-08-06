const findAllQuery = `
query Query($findAllUsersInput: FindAllUsersInput!) {
	findAllUsers(findAllUsersInput: $findAllUsersInput) {
		id
		role
		email
		primaryWalletAddress
		createdAt
		updatedAt
		exchanges {
			exchange {
				id
				name
				websiteUrl
				logoUrl
				companyLogoUrl
				hasApi
				hasCsv
				createdAt
				updatedAt
			}
		}
	}
}`;

export default findAllQuery;
