import {
  trigger,
  style,
  stagger,
  animate,
  state,
  transition,
  keyframes,
  query,
  group,
  animation,
  sequence,
  animateChild
} from '@angular/animations';
import * as kf from './keyframes';
import { AnimationEntryMetadata } from '@angular/core';

export const demoTransition = trigger('demoTransition', [
  transition(':enter', [
    query('.block', style({ opacity: 0 })),
    query(
      '.block',
      stagger(300, [
        style({ transform: 'translateY(100px)' }),
        animate(
          '1s cubic-bezier(.75,-0.48,.26,1.52)',
          style({ transform: 'translateY(0px)', opacity: 1 })
        )
      ])
    )
  ]),
  transition(':leave', [
    query(
      '.block',
      stagger(300, [
        style({ transform: 'translateY(0px)', opacity: 1 }),
        animate(
          '1s cubic-bezier(.75,-0.48,.26,1.52)',
          style({ transform: 'translateY(100px)', opacity: 0 })
        )
      ])
    )
  ])
]);

export const listPageTransition = trigger('listPageTransition', [
  transition(':enter', [
    group([
      query('@listAnimation', animateChild()),
      query('@explainer', animateChild())
    ])
  ])
]);

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(
      ':enter',
      stagger('300ms', [
        animate(
          '0.7s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ]),
      { optional: true }
    ),

    query(
      ':leave',
      stagger('300ms', [
        animate(
          '0.7s ease-in',
          keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);

export const explainerAnimation = trigger('explainer', [
  transition('* => *', [
    query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),
    query(
      '.col',
      stagger('500ms', [
        animate(
          '800ms 1.2s ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    )
  ])
]);

export const cardAnimation = trigger('cardAnimator', [
  transition('* => wobble', animate(1000, keyframes(kf.wobble))),
  transition('* => swing', animate(1000, keyframes(kf.swing))),
  transition('* => jello', animate(1000, keyframes(kf.jello))),
  transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
  transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
  transition(
    '* => rotateOutUpRight',
    animate(1000, keyframes(kf.rotateOutUpRight))
  ),
  transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY)))
]);

export const routerTransitionWorking = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate(
            '500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(-100%)' })
          )
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate(
            '500ms cubic-bezier(.75,-0.48,.26,1.52)',
            style({ transform: 'translateX(0%)' })
          )
        ])
      ]),
      query(':enter', animateChild())
    ])
  ])
]);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    query(':enter', style({ transform: 'translateX(100%)' }), {
      optional: true
    }),
    sequence([
      query(':leave', animateChild(), {
        optional: true
      }),
      group([
        query(
          ':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate(
              '500ms cubic-bezier(.75,-0.48,.26,1.52)',
              style({ transform: 'translateX(-100%)' })
            )
          ],
          {
            optional: true
          }
        ),
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)' }),
            animate(
              '500ms cubic-bezier(.75,-0.48,.26,1.52)',
              style({ transform: 'translateX(0%)' })
            )
          ],
          {
            optional: true
          }
        )
      ]),
      query(':enter', animateChild(), {
        optional: true
      })
    ])
  ])
]);
