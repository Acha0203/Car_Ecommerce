import Vue from "vue";
import Vuex from "vuex";

import { Item } from "@/model/index";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		selectedItems: [],
		category: "",
		sortBy: "",
		itemList: [
			new Item(
				"Model 3",
				"Tesla",
				48490,
				"2020-09-04",
				"/images/istockphoto-1277254968-612x612.jpg"
			),
			new Item(
				"Model X",
				"Tesla",
				89990,
				"2017-08-08",
				"/images/istockphoto-1191552504-612x612.jpg"
			),
			new Item(
				"Model S",
				"Tesla",
				82990,
				"2019-04-01",
				"/images/istockphoto-582261244-612x612.jpg"
			),
			new Item(
				"Model Y",
				"Tesla",
				48190,
				"2020-02-02",
				"/images/istockphoto-1272025387-612x612.jpg"
			),
			new Item(
				"Cayenne",
				"Porsche",
				67500,
				"2017-12-20",
				"/images/istockphoto-1138819485-612x612.jpg"
			),
			new Item(
				"Macan",
				"Porsche",
				52100,
				"2019-07-12",
				"/images/istockphoto-508107322-612x612.jpg"
			),
			new Item(
				"356 Speedster",
				"Porsche",
				56528,
				"1955-07-12",
				"/images/porsche_356_1955_images_2_640x480.jpg"
			),
			new Item(
				"Camry",
				"Toyota",
				24425,
				"2015-06-29",
				"/images/istockphoto-905266220-612x612.jpg"
			),
			new Item(
				"Sports 800",
				"Toyota",
				53657,
				"1965-06-29",
				"/images/images_toyota_sports_800_1965_1_640x480.jpg"
			),
			new Item(
				"2000GT",
				"Toyota",
				1155000,
				"1967-06-29",
				"/images/photos_toyota_2000gt_1967_1_640x480.jpg"
			),
			new Item(
				"Accord",
				"Honda",
				24800,
				"2018-10-02",
				"/images/istockphoto-649004692-612x612.jpg"
			),
			new Item(
				"Civic",
				"Honda",
				20650,
				"2015-04-04",
				"/images/istockphoto-458119929-612x612.jpg"
			),
			new Item(
				"S800M",
				"Honda",
				50068,
				"1968-04-04",
				"/images/images_honda_s-series_1968_1_640x480.jpg"
			),
			new Item(
				"CX-5",
				"Mazda",
				26940,
				"2012-11-03",
				"/images/istockphoto-1069236296-612x612.jpg"
			),
			new Item(
				"GLE Coupe",
				"Mercedes-Benz",
				76500,
				"2020-02-05",
				"/images/istockphoto-894961460-612x612.jpg"
			),
			new Item(
				"CLA",
				"Mercedes-Benz",
				37850,
				"2019-06-09",
				"/images/istockphoto-472122163-612x612.jpg"
			),
			new Item(
				"GLA 250",
				"Mercedes-Benz",
				37280,
				"2017-05-02",
				"/images/istockphoto-1297389811-612x612.jpg"
			),
			new Item(
				"RX 350",
				"Lexus",
				45175,
				"2015-01-01",
				"/images/istockphoto-657915058-612x612.jpg"
			),
			new Item(
				"NX 300",
				"Lexus",
				37510,
				"2018-09-12",
				"/images/istockphoto-480681192-612x612.jpg"
			),
			new Item(
				"Urus",
				"Lamborghini",
				218000,
				"2021-08-16",
				"/images/istockphoto-1184360237-612x612.jpg"
			),
			new Item(
				"Aventador",
				"Lamborghini",
				393695,
				"2020-09-11",
				"/images/istockphoto-1083962000-612x612.jpg"
			),
			new Item(
				"A3",
				"Audi",
				33500,
				"2019-05-08",
				"/images/istockphoto-1255388367-612x612.jpg"
			),
			new Item(
				"X3",
				"BMW",
				43000,
				"2018-03-11",
				"/images/istockphoto-1206921084-612x612.jpg"
			),
			new Item(
				"2 Series",
				"BMW",
				37500,
				"2019-01-15",
				"/images/istockphoto-1187329409-612x612.jpg"
			),
			new Item(
				"Fiat 595",
				"Abarth",
				39390,
				"1971-10-07",
				"/images/images_abarth_fiat-500_1965_1_640x480.jpg"
			),
			new Item(
				"Fiat 750 Spider",
				"Abarth",
				160000,
				"1959-10-07",
				"/images/abarth_fiat-750_1958_wallpapers_1_640x480.jpg"
			),
			new Item(
				"Monomille",
				"Abarth",
				251100,
				"1961-10-07",
				"/images/wallpapers_abarth_monomille_1961.jpg"
			),
			new Item(
				"OT 1300",
				"Abarth",
				47800,
				"1968-10-07",
				"/images/images_abarth_ot_1300_1968_1_640x480.jpg"
			),
			new Item(
				"Giulia TZ2",
				"Alfa-Romeo",
				3100000,
				"1965-10-07",
				"/images/alfa-romeo_giulia_1965_wallpapers_4_640x480.jpg"
			),
			new Item(
				"Giulietta SZ",
				"Alfa-Romeo",
				565000,
				"1960-10-07",
				"/images/pictures_alfa-romeo_giulietta_1960_2_640x480.jpg"
			),
			new Item(
				"DB5",
				"Aston-Martin",
				790000,
				"1964-10-07",
				"/images/photos_aston_martin_db5_1964_1_640x480.jpg"
			),
			new Item(
				"Dino 246 GTS",
				"Ferrari",
				280000,
				"1972-10-07",
				"/images/ferrari_dino_1972_images_1_640x480.jpg"
			),
			new Item(
				"E-Type",
				"Jaguar",
				114000,
				"1974-10-07",
				"/images/jaguar_e-type_1974_images_1_640x480.jpg"
			),
			new Item(
				"Mark 1",
				"Jaguar",
				44845,
				"1955-10-07",
				"/images/jaguar_mark-1_1955_photos_1_640x480.jpg"
			),
			new Item(
				"Elan",
				"Lotus",
				36500,
				"1967-10-07",
				"/images/lotus_elan_1967_images_1_640x480.jpg"
			),
			new Item(
				"Elite",
				"Lotus",
				90000,
				"1974-10-07",
				"/images/wallpapers_lotus_elite_1974_1_640x480.jpg"
			),
			new Item(
				"Europa Special",
				"Lotus",
				88000,
				"1973-10-07",
				"/images/lotus_europa_1973_pictures_1_640x480.jpg"
			),
			new Item(
				"Midget 1500",
				"MG",
				31400,
				"1974-10-07",
				"/images/mg_midget_1974_wallpapers_1_640x480.jpg"
			),
			new Item(
				"Mini Cooper",
				"Austin",
				34530,
				"1961-10-07",
				"/images/pictures_mini_classic_1961_1_640x480.jpg"
			),
		],
	},
	getters: {
		sortBy: state => state.sortBy,
		category: state => state.category
	},
	mutations: {
		clearItemList: function (state) {
			state.selectedItems = [];
		},

		sortLowToHigh: function (state) {
			state.selectedItems.sort(function (a, b) {
				return a.price < b.price ? -1 : 1;
			});
		},

		sortHighToLow: function (state) {
			state.selectedItems.sort(function (a, b) {
				return a.price > b.price ? -1 : 1;
			});
		},

		sortNewest: function (state) {
			state.selectedItems.sort(function (a, b) {
				return a.date > b.date ? -1 : 1;
			});
		},

		showAllItems: function (state) {
			state.selectedItems = JSON.parse(JSON.stringify(state.itemList));
		},

		setCategory: function (state, category) {
			state.category = category;
			this.commit("clearItemList");

			if (state.category !== "") {
				for (let i = 0; i < state.itemList.length; i++) {
					if (state.itemList[i].category === state.category) {
						state.selectedItems.push(state.itemList[i]);
					}
				}
			} else {
				this.commit("showAllItems");
			}

			this.commit("setSortCondition", state.sortBy);
		},

		setSortCondition: function (state, sortBy) {
			state.sortBy = sortBy;

			switch (state.sortBy) {
				case "lowToHigh":
					this.commit("sortLowToHigh");
					break;
				case "highToLow":
					this.commit("sortHighToLow");
					break;
				case "newest":
					this.commit("sortNewest");
					break;
				default:
					break;
			}
		},
	},
	actions: {
		clearItemList: function (context) {
			context.commit("clearItemList");
		},

		sortLowToHigh: function (context) {
			context.commit("sortLowToHigh");
		},

		sortHighToLow: function (context) {
			context.commit("sortHighToLow");
		},

		sortNewest: function (context) {
			context.commit("sortNewest");
		},

		showAllItems: function (context) {
			context.commit("showAllItems");
		},

		getCategory: function ({ commit }, category) {
			commit("setCategory", category);
		},

		getSortCondition: function ({ commit }, sortBy) {
			commit("setSortCondition", sortBy);
		}
	},
	modules: {
	}
})
