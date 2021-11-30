import axios from 'axios';
const BASE_URL = 'http://localhost:9000';

const GameService = {
    async getJson() {
        const response = await axios.get(`${BASE_URL}/json`);
        return response.data.game;
    },
    async newGame(numOfPlayers) {
        await axios.get(`${BASE_URL}/new/${numOfPlayers}`);
    },
    async setCard(card) {
        await axios.get(`${BASE_URL}/set/${card}`);
    },
    async setSpecialCard(card, color) {
        await axios.get(`${BASE_URL}/setspecial/${card}/${color}`);
    },
    async chooseColor(card) {
        await axios.get(`${BASE_URL}/choosecolor/${card}`);
    },
    async getCard() {
        await axios.get(`${BASE_URL}/get`);
    },
    async nextStep() {
        await axios.get(`${BASE_URL}/dostep`);
    },
    async undo() {
        await axios.get(`${BASE_URL}/undo`);
    },
    async redo() {
        await axios.get(`${BASE_URL}/redo`);
    },
    async save() {
        await axios.get(`${BASE_URL}/save`);
    },
    async load() {
        await axios.get(`${BASE_URL}/load`);
    },
}

export default GameService;