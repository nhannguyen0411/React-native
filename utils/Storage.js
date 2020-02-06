import { AsyncStorage } from 'react-native';
export const _handleGetFromStorage = async (key) => {
    if(!key) {
        return null;
    }

    try {
        const valueStr = await AsyncStorage.getItem(key);
        if (valueStr) {
            return JSON.parse(valueStr);
        }
        return null;
    }
    catch(err) {
        return null;
    }
}

export const _handleSaveInStorage = async (key, obj) => {
    if(!key) {
        console.error('Error: Key is missing!!!');
    }

    try {
        await AsyncStorage.setItem(key, JSON.stringify(obj));
    } 
    catch(err) {
        console.error(err);
    }
}

export const _handleRemoveStorage = async (key) => {
    await AsyncStorage.removeItem(key)
}