import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import {useI18n} from "vue-i18n";

export interface ICard {
    id: string
    src: string
    alt: string
    title: string
    text: string
}


export const useCaseCardsStore = defineStore('newsCards', () => {
    const { t } = useI18n();

    const cards = computed<ICard[]>(() => {
        const arr: ICard[] = []
        for (let i = 1; i <= 3; i++) {
            arr.push({
                src: `/images/news/news-img-${i}.jpg`,
                alt: 'NewsImg',
                title: t(`newsCards.cards.card${i}.title`),
                text: t(`newsCards.cards.card${i}.text`),
                id: t(`newsCards.cards.card${i}.id`),
            })
        }
        return arr
    })

    function getCardById(id: string) {
        return cards.value.find((c) => c.id === String(id))
    }

    return { cards, getCardById }
})
