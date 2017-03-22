# Deskbookers Backend Assignment - API Docs

Count results | Pagination | Sort
--- | --- | ---
`$count=<boolean>` | `$limit=<integer>` & `$offset=<integer>` |`$sort=<column>:<option>`
`true` (default: `false`)|  | `a`for ASC or `d` for DESC

## Booker

### /booker(s)
```
[
  {
    "id": "10001",
    "user_id": "4",
    "created": "1375354290",
    "user": {
      "id": "4",
      "first_name": "First4",
      "last_name": "Last4",
      "registered": "1367316449",
      "email": "email4@example.org"
    }
  },
  {
    "id": "10002",
    "user_id": "10014",
    "created": "1375888149",
    "user": {
      "id": "10014",
      "first_name": "First10014",
      "last_name": "Last10014",
      "registered": "1375883159",
      "email": "email10014@example.org"
    }
  },
  ...
]
```

### /booker(s)/:id
```
{
  "id": "10001",
  "user_id": "4",
  "created": "1375354290",
  "user": {
    "id": "4",
    "first_name": "First4",
    "last_name": "Last4",
    "registered": "1367316449",
    "email": "email4@example.org"
  }
}
```

## Venue

### /venue(s)

```
[
  {
    "id": "10003",
    "name": "Venue10003"
  },
  {
    "id": "10009",
    "name": "Venue10009"
  },
  ...
]
```

### /venue(s)/:id

```
{
  "id": "10003",
  "name": "Venue10003"
}
```

## Booking

### /booking(s)

```
[
  {
    "id": "10000",
    "booker_id": "10501",
    "created": "1376127677",
    "booker": {
      "id": null,
      "user_id": null,
      "created": null,
      "user": {
        "id": null,
        "first_name": null,
        "last_name": null,
        "registered": null,
        "email": null
      }
    },
    "items": [
      {
        "id": "10000",
        "booking_id": "10000",
        "item_id": "13670",
        "quantity": "1",
        "locked_piece_price": "10.0",
        "locked_total_price": "10.0",
        "start_timestamp": "1376308800",
        "end_timestamp": "1376312400",
        "item": {
          "id": "13670",
          "venue_id": "10594",
          "name": "Space13274",
          "space": {
            "id": "13274",
            "item_id": "13670",
            "hour_price": "12.5"
          }
        }
      }
    ],
    "venue": {
      "id": "10594",
      "name": "Venue10594"
    }
  },
  ...
]
```

### /booking(s)/:id

```
{
  "id": "10000",
  "booker_id": "10501",
  "created": "1376127677",
  "booker": {
    "id": null,
    "user_id": null,
    "created": null,
    "user": {
      "id": null,
      "first_name": null,
      "last_name": null,
      "registered": null,
      "email": null
    }
  },
  "items": [
    {
      "id": "10000",
      "booking_id": "10000",
      "item_id": "13670",
      "quantity": "1",
      "locked_piece_price": "10.0",
      "locked_total_price": "10.0",
      "start_timestamp": "1376308800",
      "end_timestamp": "1376312400",
      "item": {
        "id": "13670",
        "venue_id": "10594",
        "name": "Space13274",
        "space": {
          "id": "13274",
          "item_id": "13670",
          "hour_price": "12.5"
        }
      }
    }
  ],
  "venue": {
    "id": "10594",
    "name": "Venue10594"
  }
}
```
