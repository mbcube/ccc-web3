import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { database } from "../firebase";
import { getDiscordUserById } from "./discord";

export async function getDiscordInfo(userId: string): Promise<any> {
    const accountsRef = collection(database, "accounts");
    const accounts = query(accountsRef, where("userId", "==", userId), where("provider", "==", "discord"));

    const querySnapshot = await getDocs(accounts);
    const docs = querySnapshot.docs.map(doc => doc.data());
    const ids = querySnapshot.docs.map(doc => doc.id);

    if (docs.length === 0) {
        return "";
    }

    if (docs[0].discordName) {
        return docs[0];
    }

    return await updateDiscordInfo(ids[0], docs[0])

}

export async function updateDiscordInfo(id: string, discordInfo: any): Promise<any> {
    const discordUser = await getDiscordUserById(discordInfo);
    const accountRef = doc(database, "accounts", id);

    await setDoc(accountRef, {
        discordName: discordUser.username,
        discordAvatar: discordUser.avatar,
    }, { merge: true });

    const docSnap = await getDoc(accountRef)
    return docSnap.data();
}
