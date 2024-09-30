import { Account, Avatars, Client, Databases, ID, Query } from 'appwrite';

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.kala_aura",
  projectId: "66fa96eb003452eaff95",
  databaseId: "66fa98b300370e51d1d1",
  userCollectionId: '66fa98e600331d3ca9c8',
  videoCollectionId: '66fa990f00343aaa4042',
  storageId: "66fa9a7d001ee4af0864"
};

const client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    // Create a new user account
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error("Failed to create a new account");

    // Generate avatar URL
    const avatarUrl = avatars.getInitials(username).href;

    // Sign in the new user to initiate a session
    await signIn(email, password);

    // Create a document in the user collection with additional details
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    );

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    console.error("Error signing in:", error);
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw new Error("No Account Found");

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if (!currentUser || currentUser.total === 0) throw new Error("User not found in database");

    return currentUser.documents[0];
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw new Error(error.message);
  }
};
