const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.agenda:homebrew.little-omega.agenda/0": "B4317F50842B48A2A732FDA8B7745854",
    },
    replace:
    {
        "card.agenda:base/antiintellectual_revolution": "card.agenda:homebrew.little-omega.agenda/antiintellectual_revolution",
        "card.agenda:base/arms_reduction": "card.agenda:homebrew.little-omega.agenda/arms_reduction",
        "card.agenda:pok/articles_of_war": "card.agenda:homebrew.little-omega.agenda/articles_of_war",
        "card.agenda:pok/checks_and_balances": "card.agenda:homebrew.little-omega.agenda/checks_and_balances",
        "card.agenda:pok/clandestine_operations": "card.agenda:homebrew.little-omega.agenda/clandestine_operations",
        "card.agenda:base/classified_document_leaks": "card.agenda:homebrew.little-omega.agenda/classified_document_leaks",
        "card.agenda:base/colonial_redistribution": "card.agenda:homebrew.little-omega.agenda/colonial_redistribution",
        "card.agenda:base/committee_formation": "card.agenda:homebrew.little-omega.agenda/committee_formation",
        "card.agenda:base/compensated_disarmament": "card.agenda:homebrew.little-omega.agenda/compensated_disarmament",
        "card.agenda:base/conventions_of_war": "card.agenda:homebrew.little-omega.agenda/conventions_of_war",
        "card.agenda:base/covert_legislation": "card.agenda:homebrew.little-omega.agenda/covert_legislation",
        "card.agenda:base/economic_equality": "card.agenda:homebrew.little-omega.agenda/economic_equality",
        "card.agenda:base/enforced_travel_ban": "card.agenda:homebrew.little-omega.agenda/enforced_travel_ban",
        "card.agenda:base/executive_sanctions": "card.agenda:homebrew.little-omega.agenda/executive_sanctions",
        "card.agenda:base/fleet_regulations": "card.agenda:homebrew.little-omega.agenda/fleet_regulations",
        "card.agenda:base/galactic_crisis_pact": "card.agenda:homebrew.little-omega.agenda/galactic_crisis_pact",
        "card.agenda:base/homeland_defense_act": "card.agenda:homebrew.little-omega.agenda/homeland_defense_act",
        "card.agenda:base/imperial_arbiter": "card.agenda:homebrew.little-omega.agenda/imperial_arbiter",
        "card.agenda:base/incentive_program": "card.agenda:homebrew.little-omega.agenda/incentive_program",
        "card.agenda:base/ixthian_artifact": "card.agenda:homebrew.little-omega.agenda/ixthian_artifact",
        "card.agenda:base/judicial_abolishment": "card.agenda:homebrew.little-omega.agenda/judicial_abolishment",
        "card.agenda:pok/minister_of_antiquities": "card.agenda:homebrew.little-omega.agenda/minister_of_antiquities",
        "card.agenda:base/minister_of_commerce": "card.agenda:homebrew.little-omega.agenda/minister_of_commerce",
        "card.agenda:base/minister_of_exploration": "card.agenda:homebrew.little-omega.agenda/minister_of_exploration",
        "card.agenda:base/minister_of_industry": "card.agenda:homebrew.little-omega.agenda/minister_of_industry",
        "card.agenda:base/minister_of_peace": "card.agenda:homebrew.little-omega.agenda/minister_of_peace",
        "card.agenda:base/minister_of_policy": "card.agenda:homebrew.little-omega.agenda/minister_of_policy",
        "card.agenda:base/minister_of_sciences": "card.agenda:homebrew.little-omega.agenda/minister_of_sciences",
        "card.agenda:base/minister_of_war": "card.agenda:homebrew.little-omega.agenda/minister_of_war",
        "card.agenda:base/miscount_disclosed": "card.agenda:homebrew.little-omega.agenda/miscount_disclosed",
        "card.agenda:base/mutiny": "card.agenda:homebrew.little-omega.agenda/mutiny",
        "card.agenda:base/new_constitution": "card.agenda:homebrew.little-omega.agenda/new_constitution",
        "card.agenda:pok/nexus_sovereignty": "card.agenda:homebrew.little-omega.agenda/nexus_sovereignty",
        "card.agenda:base/political_censure": "card.agenda:homebrew.little-omega.agenda/political_censure",
        "card.agenda:base/prophecy_of_ixth": "card.agenda:homebrew.little-omega.agenda/prophecy_of_ixth",
        "card.agenda:base/public_execution": "card.agenda:homebrew.little-omega.agenda/public_execution",
        "card.agenda:base/publicize_weapon_schematics": "card.agenda:homebrew.little-omega.agenda/publicize_weapon_schematics",
        "card.agenda:pok/rearmament_agreement": "card.agenda:homebrew.little-omega.agenda/rearmament_agreement",
        "card.agenda:base/regulated_conscription": "card.agenda:homebrew.little-omega.agenda/regulated_conscription",
        "card.agenda:pok/representative_government": "card.agenda:homebrew.little-omega.agenda/representative_government",
        "card.agenda:pok/research_grant_reallocation": "card.agenda:homebrew.little-omega.agenda/research_grant_reallocation",
        "card.agenda:base/search_warrant": "card.agenda:homebrew.little-omega.agenda/search_warrant",
        "card.agenda:base/seed_of_an_empire": "card.agenda:homebrew.little-omega.agenda/seed_of_an_empire",
        "card.agenda:base/shared_research": "card.agenda:homebrew.little-omega.agenda/shared_research",
        "card.agenda:base/swords_to_plowshares": "card.agenda:homebrew.little-omega.agenda/swords_to_plowshares",
        "card.agenda:base/unconventional_measures": "card.agenda:homebrew.little-omega.agenda/unconventional_measures",
        "card.agenda:base/wormhole_reconstruction": "card.agenda:homebrew.little-omega.agenda/wormhole_reconstruction",
        "card.agenda:base/wormhole_research": "card.agenda:homebrew.little-omega.agenda/wormhole_research",
    }
  });

world.TI4.homebrew.resetOnTableDecks()