// bump version number
module.exports = {
    options: {
        files: ['package.json'],
        updateConfigs: ['pkg'],
        commit: false,
        createTag: false,
        push: false,
        globalReplace: false,
        prereleaseName: false,
        metadata: '',
        regExp: false
    }
};
