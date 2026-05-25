# Nonprofit Community Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `NonProfitConnect`
- `NonProfitShield`
- `AINonprofitFieldOperationsManager`
- `AIVolunteerMatchingManagement`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/nonprofit-community-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4110`

Seeded users:
- `admin@nonprofit-community.local / admin123`
- `manager@nonprofit-community.local / manager123`
- `analyst@nonprofit-community.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/nonprofit-community-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4110 npm run smoke
```
