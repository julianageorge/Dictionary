const Grouping = (meanings) => {
    return meanings.reduce((items, item) => {
        if (!items[item.partOfSpeech]) {
            items[item.partOfSpeech] = {
                title: item.partOfSpeech,
                definitions: [],
                synonyms: [],
                antonyms: []
            };
        }
        items[item.partOfSpeech].definitions.push(...item.definitions);
        items[item.partOfSpeech].synonyms.push(...item.synonyms);
        items[item.partOfSpeech].antonyms.push(...item.antonyms);
        return items;
    }, {});
};
 export default Grouping;