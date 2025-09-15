import { defineStore } from 'pinia'
import {computed,  ref} from 'vue'
import { useI18n } from 'vue-i18n';

export interface ICard {
    id: string
    src: string
    alt: string
    title: string
    tags: string
}


export const useCaseCardsStore = defineStore('caseCards', () => {
    const { t } = useI18n();

    const cards = computed<ICard[]>(() => {
        const arr: ICard[] = []
        for (let i = 1; i <= 6; i++) {
            arr.push({
                src: `/images/case/any-${i}.jpg`,
                alt: t(`caseCards.cards.card${i}.alt`),
                title: t(`caseCards.cards.card${i}.title`),
                tags: t(`caseCards.cards.card${i}.tags`),
                id: t(`caseCards.cards.card${i}.id`),
            })
        }
        return arr
    })

    const cardsHidden = computed<ICard[]>(() => [
        {
            src: '/images/case/any-7.jpg',
            alt: t('caseCards.cardsHidden.card7.alt'),
            title: t('caseCards.cardsHidden.card7.title'),
            tags: t('caseCards.cardsHidden.card7.tags'),
            id: t('caseCards.cardsHidden.card7.id')
        },
        {
            src: '/images/case/any-8.jpg',
            alt: t('caseCards.cardsHidden.card8.alt'),
            title: t('caseCards.cardsHidden.card8.title'),
            tags: t('caseCards.cardsHidden.card8.tags'),
            id: t('caseCards.cardsHidden.card8.id')
        }
    ]);

    function getCardById(id: string) {
        return cards.value.find((c) => c.id === String(id))
    }

    return { cards, cardsHidden, getCardById }
})
