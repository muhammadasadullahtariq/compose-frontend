import fun from "@/assets/images/fun.svg";
import history from "@/assets/images/history.svg";
import relax from "@/assets/images/relax.svg";
import discovery from "@/assets/images/discovery.svg";
import sportsQuestion1 from "@/assets/images/sports.svg";
import business from "@/assets/images/business.svg";
import getLost from "@/assets/images/questionaires/getLost.svg";
import knowCountry from "@/assets/images/questionaires/knowCountry.svg";
import mainCity from "@/assets/images/questionaires/mainCity.svg";
import Solo from "@/assets/images/questionaires/solo-trip.svg";
import Friends from "@/assets/images/questionaires/friend-trip.svg";
import Family from "@/assets/images/questionaires/family-trip.svg";
import Couple from "@/assets/images/questionaires/couple-trip.svg";
import Business from "@/assets/images/questionaires/business.svg";
import Multiple from "@/assets/images/questionaires/multiple-city.svg";
import Single from "@/assets/images/questionaires/single-city.svg";
import spa from "@/assets/images/questionaires/spa.svg";
import meditation from "@/assets/images/questionaires/meditation.svg";
import sports from "@/assets/images/questionaires/sports.svg";
import arts from "@/assets/images/questionaires/arts.svg";
import museum from "@/assets/images/questionaires/museum.svg";
import theater from "@/assets/images/questionaires/theater.svg";
import nature from "@/assets/images/questionaires/nature.svg";
import hiking from "@/assets/images/questionaires/hiking.svg";
import photography from "@/assets/images/questionaires/photography.svg";
import parashoote from "@/assets/images/questionaires/parashoot.svg";
import comedy from "@/assets/images/questionaires/comedy.svg";
import music from "@/assets/images/questionaires/music.svg";
import drinking from "@/assets/images/questionaires/drinking.svg";
import shopping from "@/assets/images/questionaires/shopping.svg";
import party from "@/assets/images/questionaires/party.svg";
import FullItinerary from "@/assets/images/questionaires/full-Itinerary.svg";
import SleepOnly from "@/assets/images/questionaires/sleep-only.svg";
import DiningOnly from "@/assets/images/questionaires/dining-only.svg";
import VisitOnly from "@/assets/images/questionaires/visit-only.svg";
import * as COLORS from "@/constants/colors";

export const questionsHedaing = [
  "Purpose of trip",
  "Who's travelling",
  "Where to",
  "When to go",
  "Budget",
  "Interests",
  "Itinerary",
  "Any comments",
  "What you looking for?",
];

export const questionSlug = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
  "question6",
  "question7",
];

export const questionsTitle = [
  "Hey there! What brings you to travel?",
  "Where will your journey take you?",
  "With whom will you be traveling?",
  "What kind of itinerary you are looking for?",
  "We would love to hear from you!",
  "Hey there! What brings you to travel?",
  "Hey there! What brings you to travel?",
];

export const questions1 = [
  {
    heading: "Fun",
    label: "I'm looking forward to a thrilling and fun-filled adventure!",
    image: fun,
  },
  {
    heading: "History",
    label:
      "Excited to immerse myself in the rich history and cultural heritage of the destination.",
    image: history,
  },
  {
    heading: "Relax",
    label: "Can't wait to unwind and relax in the tranquil surroundings.",
    image: relax,
  },
  {
    heading: "Discovery",
    label:
      "Eager to explore and discover new places, hidden gems, and unique experiences.",
    image: discovery,
  },
  {
    heading: "Sports",
    label:
      "Eager to explore and discover new places, hidden gems, and unique experiences.",
    image: sportsQuestion1,
  },
  {
    heading: "Business",
    label:
      "Heading out on a productive business trip, aiming to achieve great results.",
    image: business,
  },
];

export const questions2 = [
  {
    heading: "I only know the country",
    image: knowCountry,
  },
  {
    heading: "I already know the main cities",
    image: mainCity,
  },
  {
    heading: "I wanna get lost",
    image: getLost,
  },
];

export const questions3 = [
  { title: "Solo", image: Solo },
  { title: "Friends", image: Friends },
  { title: "Couple", image: Couple },
  { title: "Family", image: Family },
  { title: "Business", image: Business },
];

export const questions4 = [
  {
    title: "Single city",
    image: Single,
    bg: COLORS.questionBlockBlueColor,
  },
  {
    title: "Multi city",
    image: Multiple,
    bg: COLORS.questionBlockGrayColor,
  },
];

export const questions6 = [
  {
    title: "Spa",
    image: spa,
  },
  {
    title: "Meditation",
    image: meditation,
  },
  { title: "Sports", image: sports },
  { title: "Arts", image: arts },

  { title: "Museum", image: museum },
  { title: "Theater", image: theater },
  { title: "Nature", image: nature },
  { title: "Hiking", image: hiking },
  {
    title: "Photography",
    image: photography,
  },
  {
    title: "Parashoote",
    image: parashoote,
  },
  { title: "comedy", image: comedy },
  { title: "Music", image: music },
  { title: "Drinking", image: drinking },
  { title: "Shopping", image: shopping },
  { title: "Party", image: party },
];

export const questions7 = [
  {
    title: "Full Itinerary (sleep, eat, visit)",
    image: FullItinerary,
    bg: COLORS.questionBlockBlueColor,
  },
  { title: "Sleep only", image: SleepOnly, bg: COLORS.questionBlockGrayColor },
  { title: "Visit only", image: VisitOnly, bg: COLORS.questionBlockBlueColor },
  {
    title: "Dining only",
    image: DiningOnly,
    bg: COLORS.questionBlockGrayColor,
  },
];
