import {MainForm} from "./components/Forms/MainForm";
import {LobbyForm} from "./components/Forms/LobbyForm";
import {BathroomForm} from "./components/Forms/BathroomForm";
import {KitchenForm} from "./components/Forms/KitchenForm";
import {LivingRoomForm} from "./components/Forms/LivingRoomForm";
import {BedroomForm} from "./components/Forms/BedroomForm";
import {NotFound} from "./components/Player/NotFound";

import StartIcon from './assets/freepik-icons/011-notes.svg';
import LobbyIcon from './assets/freepik-icons/008-room-key.svg';
import BathroomIcon from './assets/freepik-icons/004-bathtub.svg';
import KitchenIcon from './assets/freepik-icons/009-cutlery.svg';
import LivingRoomIcon from './assets/freepik-icons/006-sofa.svg';
import BedroomIcon from './assets/freepik-icons/001-bed.svg';
import ResultIcon from './assets/freepik-icons/012-photo-camera.svg'
import {Result} from "./components/Player/Result";


export const routes = [
	{path: '/', component: MainForm, label: 'Старт', icon: StartIcon},
	{path: '/lobby', component: LobbyForm, label: 'Прихожая', icon: LobbyIcon},
	{path: '/bathroom', component: BathroomForm, label: 'Санузел', icon: BathroomIcon},
	{path: '/kitchen', component: KitchenForm, label: 'Кухня', icon: KitchenIcon},
	{path: '/livingroom', component: LivingRoomForm, label: 'Гостиная', icon: LivingRoomIcon},
	{path: '/bedroom', component: BedroomForm, label: 'Спальня', icon: BedroomIcon},
	{path: '/result', component: Result, label: 'Ваша планировка', icon: ResultIcon},
	
];