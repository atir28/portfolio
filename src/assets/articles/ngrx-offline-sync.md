# Angular NgRx Offline Synchronization

Building applications that work seamlessly offline is a challenge. NgRx provides a robust state management solution that pairs perfectly with offline-first architectures.

## The Problem

When a user goes offline:
1. They still need to view data.
2. They still need to mutate data.
3. Mutations must sync to the server when they return online.

## Strategy

You can use the `ActionQueue` pattern in NgRx. Save the actions locally and dispatch them later.

```typescript
@Effect()
syncOfflineActions$ = this.actions$.pipe(
  ofType('[Network] Online'),
  switchMap(() => this.offlineService.getQueuedActions()),
  mergeMap(actions => actions)
);
```

Using IndexedDB with Angular makes storing state robust and efficient for offline PWA capabilities.
